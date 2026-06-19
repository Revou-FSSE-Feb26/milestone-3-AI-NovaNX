const DEFAULT_RETRIES = 2;
const DEFAULT_DELAY = 500;

function createAbortError() {
  const error = new Error("Request was cancelled.");
  error.name = "AbortError";
  return error;
}

function wait(delay, signal) {
  if (signal?.aborted) {
    return Promise.reject(createAbortError());
  }

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      signal?.removeEventListener("abort", handleAbort);
      resolve();
    }, delay);

    function handleAbort() {
      clearTimeout(timeoutId);
      signal?.removeEventListener("abort", handleAbort);
      reject(createAbortError());
    }

    signal?.addEventListener("abort", handleAbort, { once: true });
  });
}

export async function fetchWithRetry(
  url,
  options = {},
  retries = DEFAULT_RETRIES,
) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, options);

      if (response.ok) {
        return response;
      }

      lastError = new Error(`Request failed with status ${response.status}.`);
    } catch (error) {
      if (error.name === "AbortError") {
        throw error;
      }

      lastError = error;
    }

    if (attempt < retries) {
      await wait(DEFAULT_DELAY * (attempt + 1), options.signal);
    }
  }

  throw lastError || new Error("Request failed.");
}

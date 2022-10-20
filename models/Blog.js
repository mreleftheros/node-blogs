class Blog {
  static validate(data) {
    const errors = {};
    let error = "";
    const len = Object.keys(data).length;

    if (len !== 3 || (!("title" in data) || !("snippet" in data) || !("body" in data))) {
      error = "Data mismatch.";

      return {
        errors,
        error,
        data
      }
    }

    if (typeof data.title !== "string" || typeof data.snippet !== "string" || typeof data.body !== "string") {
      error = "Invalid data.";

      return {
        errors,
        error,
        data
      }
    }

    data.title.trim();
    data.snippet.trim();
    data.body.trim();

    if (!data.title) {
      errors.textError = "Must enter title.";
    } else if (data.title.length > 50) {
      errors.textError = "Title too big.";
    }

    if (!data.snippet) {
      errors.snippetError = "Must enter snippet.";
    } else if (data.snippet.length > 50) {
      errors.snippetError = "Snippet too big.";
    }

    if (!data.body) {
      errors.bodyError = "Must enter body.";
    }

    if (Object.keys(errors).length > 0) {
      error = "Data validation failed.";
    }

    return {
      error,
      errors,
      data
    };
  }
}
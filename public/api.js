async function fetchJSON(request) {
  try {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    const jsonData = await response.json();
    document.getElementById("setup").innerHTML = jsonData.setup;
    document.getElementById("punchline").innerHTML = jsonData.punchline;
  } catch (error) {
    console.error("Error:", error);
  }
}

document.querySelector("button").addEventListener("click", () => {
  fetchJSON("https://official-joke-api.appspot.com/random_joke");
});

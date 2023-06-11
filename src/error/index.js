export default () => {
  const container = document.createElement("div");

  const template = `
  <h2> Error 404 </h2>
  <p>Page not found</p>`

  container.innerHTML = template

  return container;
}
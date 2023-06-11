export default () => {
  const container = document.createElement("div");

  const template = `
  <img src="imgs/about.jpg" alt="">
  <aside><h2>About</h2>
  <p>Kittens ate the definition of cuteness. They exude cute. They make us smile and warm our hearts with their playful antics. They play till they're exhausted then jump into our laps to win our hearts with their bright eyes and soothing purrs.</p></aside>
  `

  container.innerHTML = template

  return container
}
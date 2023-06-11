export default () => {
  const container = document.createElement("div");

  const template = `
  <img src="imgs/contact.jpg" alt="">
  <aside><h2>Contact</h2>
  <p class="center">Contact us by phone (11 2345-6789), <br>E-mail (cats@cats.com) or <br>Instagram (@catscats).</p> </aside>`;

  container.innerHTML = template;

  return container;
}
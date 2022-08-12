class DetailComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <main id="main" class="main">
        <section class="detail"></section>
      </main>`;
  }
}

customElements.define('detail-component', DetailComponent);

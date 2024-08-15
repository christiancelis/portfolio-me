import './style.css'

    document.querySelector('#app').innerHTML = `
    <div>
      <ul><li>hola<li></ul>
    </div>`


if (import.meta.hot) {
  import.meta.hot.accept(() => {
      console.log('Main module updated');
  });
}
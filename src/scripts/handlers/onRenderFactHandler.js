const onRenderFactHandler = (fact) => {
  const index = Math.floor(Math.random() * 10);
  const renderFact = () => {
    return `<p>${fact[index]}</p>`;
  };

  $('.fact').append(renderFact);
};

export default onRenderFactHandler;

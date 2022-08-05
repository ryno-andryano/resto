const onRenderFactHandler = (fact) => {
  const index = Math.floor(Math.random() * 10);
  const renderFact = () => {
    return fact[index];
  };

  $('.fact p').text(renderFact);
  $('.change-fact-button i').toggleClass('spin');
};

export default onRenderFactHandler;

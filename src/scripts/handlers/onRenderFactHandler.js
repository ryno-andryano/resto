const onRenderFactHandler = (fact) => {
  const renderFact = () => {
    return fact[Math.floor(Math.random() * fact.length)];
  };

  $('.change-fact-button i').toggleClass('spin');
  $('.fact p').text(renderFact);
};

export default onRenderFactHandler;

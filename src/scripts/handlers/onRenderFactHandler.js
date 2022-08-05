const onRenderFactHandler = (fact) => {
  const renderFact = () => {
    return fact[Math.floor(Math.random() * fact.length)];
  };

  $('.food-facts__shuffle-button i').toggleClass('spin');
  $('.food-facts__fact').text(renderFact);
};

export default onRenderFactHandler;

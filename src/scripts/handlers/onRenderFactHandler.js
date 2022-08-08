const onRenderFactHandler = (facts) => {
  const renderFact = () => {
    return facts[Math.floor(Math.random() * facts.length)];
  };

  $('.food-facts__shuffle-button i').toggleClass('spin');
  $('.food-facts__fact').text(renderFact);
};

export default onRenderFactHandler;

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 17,
    width: "100%",
    backgroundColor: "#A6A6A6",
    borderRadius: 4,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;

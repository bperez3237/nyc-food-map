const formatAddress = (address: string) => {
  return address.slice(0, address.indexOf(","));
};

export default formatAddress;

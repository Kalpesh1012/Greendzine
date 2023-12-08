export function filterdata(firstname, ApiDetails) {
  const filtersdata = ApiDetails.filter((item) =>
    item.Name.toLowerCase().includes(firstname.toLowerCase())
  );

  return filtersdata;
}

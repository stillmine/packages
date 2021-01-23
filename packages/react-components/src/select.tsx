const SelectOption = ({ children }) => <option value="item1">{children}</option>;

export const Select = ({ children, title }) => (
  <label>
    <span>{title}</span>
    <input list="select" type="text" />
    <datalist id="select">{children}</datalist>
  </label>
);

Select.Option = SelectOption;

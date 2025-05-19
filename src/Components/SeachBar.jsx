import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const SearchBar = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="grid grid-cols-3 gap-x-4 w-11/12 mx-auto mb-[-19%] ">
      <div>
        <Input.Search
          placeholder="Search about your disease"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
      <div>
        <Select
          defaultValue="English"
          style={{ width: 120 }}
          allowClear
          options={[{ value: 'lucy', label: 'Lucy' }]}
          placeholder="Select your country"
        />
      </div>
    </div>
  );
};

export default SearchBar;

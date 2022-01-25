import { FC } from "react";
import { Search } from "react-bootstrap-icons";

type Props = {
  handleChange: (s: string) => void;
};

const InputSearch: FC<Props> = ({ handleChange }) => {
  return (
    <div className='d-flex align-items-center mt-5 mb-4'>
      <Search className="me-3" color="white" />
      <input
        type="search"
        className="form-control"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export { InputSearch };
// import Counter from 'components/Counter/Counter';
import Dropdown from 'components/Dropdown/Dropdown';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <Counter initialValue={10}/> */}
      <Dropdown />
    </div>
  );
};

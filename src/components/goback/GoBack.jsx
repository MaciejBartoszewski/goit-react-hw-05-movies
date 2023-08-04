import css from 'components/Components.module.css';
export const GoBackBtn = ({ onClick }) => {
  return (
    <button className={css.goBackBtn} type="buton" onClick={onClick}>
      Go Back
    </button>
  );
};
export const Button = ({ children, onButtonClicked }) => {
  return (
    <button type='button' className='btn btn-primary' onClick={onButtonClicked}>
      {children}
    </button>
  )
}

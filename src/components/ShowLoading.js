export const ShowLoading = () => {
  return (
    <div className='d-flex justify-content-center mt-4 text-primary fs-2 fw-bold '>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

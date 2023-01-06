import { Toaster } from 'solid-toast';

const Toast = () => {

  return (
    <Toaster
      position="top-right"
      // Spacing between each toast in pixels
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options that each toast will inherit. Will be overwritten by individual toast options
        className: '',
        duration: 5000,
        style: {
          background: 'gray',
          color: '#fff',
        },
        iconTheme: {
          primary: '#d3eaf2',
          secondary: '#1f2937'
        }
      }}
    />
  )
}

export default Toast;

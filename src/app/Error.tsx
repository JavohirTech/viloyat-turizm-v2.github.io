import React from 'react';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: React.FC<ErrorProps> = ({statusCode}) => {
  return (
      <div>
        <p>
          {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
        </p>
      </div>
  );
};


export async function getServerSideProps() {
  return {
    props: {statusCode: 500},
  };
}

export default ErrorPage;


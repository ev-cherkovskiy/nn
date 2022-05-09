import React from "react";
import GoogleLanding from "./GoogleLanding";
import Header from "./Header";
import GoogleSearch from './GoogleSearch';
import HappyBirthday from "./HappyBirthday";


function App() {

  const [request, setRequest] = React.useState('');
  const [headerType, setHeaderType] = React.useState('landing');
  const [isOnGreeting, setIsOnGreeting] = React.useState(false);
  const [antidouble, setAntidouble] = React.useState(true);

  React.useEffect(() => {
    onComebackClick();
  }, []);

  const onSearchSubmit = (request) => {
    setRequest(request);
    localStorage.setItem('request', request);
    setAntidouble(false);
    setHeaderType('search');
  }

  const onComebackClick = () => {
    localStorage.removeItem('request');
    setAntidouble(true);
    setRequest({});
    setIsOnGreeting(false);
  }

  const onHappyBirthday = () => {
    setIsOnGreeting(true);
  }

  return (
    <div className="page">
      {
        !request.length ?
          <>
            <Header
              type={'landing'}
              request={request}
            />
            <GoogleLanding onSubmit={onSearchSubmit} onComebackClick={onComebackClick} />
          </>
          :
          <>
          </>
      }
      {
        !isOnGreeting ?
          <>
            <Header
              type={'search'}
              request={localStorage.getItem('request')}
              onComebackClick={onComebackClick}
              antidouble={antidouble}
            />
            <GoogleSearch
              request={localStorage.getItem('request')}
              onLinkClick={onHappyBirthday}
            />
          </>
          :
          <>
            <HappyBirthday request={localStorage.getItem('request')} />
          </>
      }
    </div>
  )
}

export default App;

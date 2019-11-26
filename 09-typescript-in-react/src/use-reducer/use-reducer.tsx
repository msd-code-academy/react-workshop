import React, {useReducer} from 'react';

enum Language {
  CZ,
  EN
}

type AppState = {
  user: string;
  lang: Language;
};

// Here we use so called Discriminated Unions
type Action = { 
  type: 'SET_USER';
  payload: string;
} | { 
  type: 'SET_LANG';
  payload: Language;
};

// Our reducer - normally would be in a separate file
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'SET_LANG':
      return {
        ...state,
        lang: action.payload 
      };
    default:
      return state;
  }
}

const ComponentWithUseReducer: React.FC = () => {
  const users: string[] = ['Alfred', 'Ben', 'Howard'];

  const defaultState: AppState = {
    lang: Language.EN,
    user: users[0]
  }

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <h2>Current User: {state.user}</h2>
      <div className="button" onClick={() => 
        dispatch({
          type: 'SET_USER',
          payload: users[ (users.indexOf(state.user) + 1) % users.length ]
        })
      }>
        Change User
      </div>
      <h2>Current Language: {state.lang}</h2>
      <div className="button" onClick={() => 
        dispatch({
          type: 'SET_LANG',
          payload: state.lang === Language.CZ ? Language.EN : Language.CZ
        }) 
      }>
        Change Language
      </div>
    </>
  )
}

export default ComponentWithUseReducer;

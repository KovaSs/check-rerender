import { createStore } from 'redux';

const initialState = {
  user: {
    comments: [
      {
        id: '1fdaf',
        title: 'comment',
        author: {
          name: 'author name'
        }
      },
      {
        id: '1234',
        title: 'comment 2',
        author: {
          name: 'author name 2'
        }
      }
    ],
    name: 'name',
    age: 14
  },
  services: [
    {
      id: 1,
      title: 'service 1'
    },
    {
      id: 2,
      title: 'service 2'
    }
  ],
  servicesIds: [1, 2]
};

function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'UPDATE_AGE':
      return {
        ...state,
        user: {
          ...state.user,
          age: action.payload.age
        }
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name
        }
      };
    case 'UPDATE_COMMENT':
      const comment = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          comments: state.user.comments.map(el => el.id === comment.id ? { ...el, ...comment } : el)
        }
      };
    case 'CREATE_SERVICE':
      const serviceId = (Math.random() * 100).toFixed();

      const newService = {
        id: serviceId,
        title: `service ${serviceId}`
      };

      return {
        ...state,
        services: [...state.services, newService],
        servicesIds: [...state.servicesIds, serviceId]
      };

    case 'REMOVE_SERVICE':
      return {
        ...state,
        services: state.services.filter(el => el.id !== action.payload),
        servicesIds: state.services.filter(el => el !== action.payload)
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);

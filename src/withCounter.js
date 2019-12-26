import React from 'react';

export default function(displayName) {
  return function(Component) {
    return class extends React.PureComponent {
      count = 0;

      static displayName = displayName;

      componentDidUpdate() {
        this.count++;
      }

      componentDidMount() {
        window.addEventListener('keydown', this.showInfo);
        this.count++;
      }

      componentWillUnmount() {
        window.removeEventListener('keydown', this.showInfo);
      }


      showInfo = event => {
        switch(event.keyCode) {
          case 49:
            console.group(displayName);
            console.log('Колличество рендеров: ', this.count);
            console.groupEnd();
            break;
          case 50:
            this.count = 0;
            console.log('соличество рендеров сброшено');
            break;
        }
      };

      render() {
        return <Component {...this.props} />;
      }
    };
  };
}

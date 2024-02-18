/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component<T> {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }
interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class PageProps implements ComponentProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання:
const pageProps: PageProps = { title: "Page Title" };
const page = new Page(pageProps);
page.pageInfo(); 

export {};
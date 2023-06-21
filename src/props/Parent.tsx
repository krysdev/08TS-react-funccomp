import { Child1 } from './Child';
// import { Child2 } from './Child';

export function Parent() {
  return <Child1 colour="red" onClick={() => console.log('CLICKED')} >
    -X children X-
    </Child1>
}

export default Parent;

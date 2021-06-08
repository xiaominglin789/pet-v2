import {
  Button,
  Image,
  Grid,
  GridItem,
  Tag,
  List,
  PullRefresh,
  Popup,
  Form,
  Swipe,
  SwipeItem,
  Switch,
  Rate,
  Uploader,
  ShareSheet,
  SwipeCell,
  Empty,
  Progress,
  DropdownMenu,
  DropdownItem
} from 'vant';

const components = [
  Button,
  Image,
  Grid,
  GridItem,
  Tag,
  List,
  PullRefresh,
  Popup,
  Form,
  Swipe,
  SwipeItem,
  Switch,
  Rate,
  Uploader,
  ShareSheet,
  SwipeCell,
  Empty,
  Progress,
  DropdownMenu,
  DropdownItem
]

export default {
  install: function(Vue:any) {
    components.forEach(el => {
      Vue.component(el.name, el);
    })
  }
}

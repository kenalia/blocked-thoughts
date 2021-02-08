import { getQuote } from '@api';

export default function Header() {
  return <header><p>Blocked Thoughts | <em>{getQuote()}</em></p></header>
}
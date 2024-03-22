import { useSelector } from 'react-redux';
import { selectContactsItems } from '../../redux/contactsSlice';

export default function ContactCount() {
  const contactCount = useSelector(selectContactsItems).length;

  return <p>Contacts: ({contactCount})</p>;
}

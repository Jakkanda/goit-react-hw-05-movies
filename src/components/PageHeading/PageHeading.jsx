import styled from './PageHeading.module.css';
export default function PageHeading({ title }) {
  return <h1 className={styled.title}>{title}</h1>;
}

import React from 'react';
import { Button, Timeline } from 'antd';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import Header from '../../../../../../components/Header';
import MenuBar from '../../../../../../components/MenuBar';
import Footer from '../../../../../../components/Footer';
import './index.css';


const DetailsPost = () => (
  <div>
    <Header />
    <MenuBar />
    <article>
      <h5 className="post__category">REACT</h5>
      <h1>React is Awesome!!</h1>
      <p className="post__info">
        Submited 2 hours ago by <span className="username">Jean Silva</span> - <FontAwesomeIcon icon={faComments} /> 2 comment(s)
      </p>
      <p>
        <b>123 point(s)</b>
      </p>
      <p>
        I’ve been working on very large web applications for the past few years, starting from ground zero and, with a dozen other developers, making them scale up to now be used by millions of people. And sometimes, if you didn’t start with a good folder structure, it can become difficult to keep your code organized.
      </p>
      <ul className="group__actions">
        <li>
          <Button shape="circle" icon="delete" />
        </li>
        <li>
          <Button shape="circle" icon="edit" />
        </li>
        <li>
          <Button type="danger" shape="circle" icon="dislike-o" ghost />
        </li>
        <li>
          <Button type="primary" shape="circle" icon="like-o" ghost />
        </li>
      </ul>
      <h4 style={{
        margin: '30px 0',
        borderTop: '1px solid #e4e4e4',
        borderBottom: '1px solid #e4e4e4',
        padding: '30px 0',
        }}
      > 4 Comments
      </h4>
      <Timeline>
        <Timeline.Item>
          <p><span className="username">Jean Silva</span> - 13 Maio, 2018</p>
          <p>
            If you use Webpack, you can create an alias to define the root level of your project.
            Then you can use something like import Button from ‘MyApp/components/Button’.
          </p>
          <ul className="group__actions">
            <li>
              <Button shape="circle" icon="delete" />
            </li>
            <li>
              <Button shape="circle" icon="edit" />
            </li>
            <li>
              <Button type="danger" shape="circle" icon="dislike-o" ghost />
            </li>
            <li>
              <Button type="primary" shape="circle" icon="like-o" ghost />
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <p><span className="username">Jean Silva</span> - 13 Maio, 2018</p>
          <p>
            If you use Webpack, you can create an alias to define the root level of your project.
            Then you can use something like import Button from ‘MyApp/components/Button’.
          </p>
          <ul className="group__actions">
            <li>
              <Button shape="circle" icon="delete" />
            </li>
            <li>
              <Button shape="circle" icon="edit" />
            </li>
            <li>
              <Button type="danger" shape="circle" icon="dislike-o" ghost />
            </li>
            <li>
              <Button type="primary" shape="circle" icon="like-o" ghost />
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <p><span className="username">Jean Silva</span> - 13 Maio, 2018</p>
          <p>
            If you use Webpack, you can create an alias to define the root level of your project.
            Then you can use something like import Button from ‘MyApp/components/Button’.
          </p>
          <ul className="group__actions">
            <li>
              <Button shape="circle" icon="delete" />
            </li>
            <li>
              <Button shape="circle" icon="edit" />
            </li>
            <li>
              <Button type="danger" shape="circle" icon="dislike-o" ghost />
            </li>
            <li>
              <Button type="primary" shape="circle" icon="like-o" ghost />
            </li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <p><span className="username">Jean Silva</span> - 13 Maio, 2018</p>
          <p>
            If you use Webpack, you can create an alias to define the root level of your project.
            Then you can use something like import Button from ‘MyApp/components/Button’.
          </p>
          <ul className="group__actions">
            <li>
              <Button shape="circle" icon="delete" />
            </li>
            <li>
              <Button shape="circle" icon="edit" />
            </li>
            <li>
              <Button type="danger" shape="circle" icon="dislike-o" ghost />
            </li>
            <li>
              <Button type="primary" shape="circle" icon="like-o" ghost />
            </li>
          </ul>
        </Timeline.Item>
      </Timeline>
    </article>
    <Footer />
  </div>
);

export default DetailsPost;

import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import { Layout, Divider } from 'antd';
import { fetchSources } from '../../api';

const NewsSection = React.lazy(() => import('./NewsSection'));
const News = React.lazy(() => import('./News'));

const { Content } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
    sources: [],
    homePage: true,
    query: '',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  async componentDidMount() {
    const sources = await fetchSources();

    this.setState({ sources });
  }

  loadNews(query) {
    this.setState({
      homePage: false,
      query: query
    });
  }

  render() {
    return (
      <Layout>        
        <div className="abs-center mh-100" id="noticias">
          <Divider />
          <h1 style={{ fontSize: '50px' }}>Noticias</h1>
          <Divider />
        </div>
        <Layout className="site-layout">  
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              paddingRight: 0,
              minHeight: 280,
            }}
          >
            <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>
              {this.state.homePage === true ? <News /> : <NewsSection category='everything' query={'q=' + this.state.query} topHeading={this.state.query} results='100' />}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
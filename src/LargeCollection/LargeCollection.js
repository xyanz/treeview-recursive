import React, { Component } from 'react';
import axios from 'axios';
import Tree from 'react-virtualized-tree'
import 'react-virtualized/styles.css'
import 'react-virtualized-tree/lib/main.css'
// import 'material-icons/css/material-icons.css'
import { constructTree } from '../toolbelt';
import Renderers from 'react-virtualized-tree';
const MIN_NUMBER_OF_PARENTS = 500;
const MAX_NUMBER_OF_CHILDREN = 15;
const MAX_DEEPNESS = 4;

const { Deletable, Expandable, Favorite } = Renderers;

const Nodes = constructTree(MAX_DEEPNESS, MAX_NUMBER_OF_CHILDREN ,MIN_NUMBER_OF_PARENTS);
const getTotalNumberOfElements = (nodes, counter = 0) => {
  return counter + nodes.length + nodes.reduce((acc, n) => getTotalNumberOfElements(n.children, acc) ,0)
}

const totalNumberOfNodes = getTotalNumberOfElements(Nodes);

class LargeCollection extends Component {
  state = {
    nodes: Nodes
  }

  // componentWillMount () {
  //   this.setState({
  //     nodes: Nodes
  //   })
  // }

  // componentWillMount () {
  //   axios.get('https://raw.githubusercontent.com/curran/data/gh-pages/un/placeHierarchy/countryHierarchy.json')
  //   .then((response) => {
  //     console.log('response ', response.data.children)
  //     this.setState({
  //       nodes: response.data.children
  //     })
  //   })
  // }

  handleChange = (nodes) => {
    this.setState({ nodes })
  }

  render() {
    // debugger
    if (this.state.nodes){
      console.log(this.state.nodes)
    }
    return (
      <div>
        <Tree nodes={this.state.nodes} onChange={this.handleChange}>
          {
            ({ node, ...rest }) =>
              <Expandable node={node} {...rest}>
                { node.name }
                <Deletable node={node} {...rest}>
                  <Favorite node={node} {...rest}/>
                </Deletable>
              </Expandable>
          }
        </Tree>
      </div>
    );
  }
}

export default LargeCollection;
// graph representation using adjacency list.
class GraphEdge {
  constructor(src, dest) {
    this.src = src;
    this.dest = dest;
  }
}

function createAdjacencyList(graph) {
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  graph[0].push(new GraphEdge(0, 2));
  graph[1].push(new GraphEdge(1, 2));
  graph[1].push(new GraphEdge(1, 3));
  graph[2].push(new GraphEdge(2, 0));
  graph[2].push(new GraphEdge(2, 1));
  graph[2].push(new GraphEdge(2, 3));
  graph[3].push(new GraphEdge(3, 1));
  graph[3].push(new GraphEdge(3, 2));

  return graph;
}
// const graph = createAdjacencyList(new Array(4));
// console.log(graph[0]);

// graph implementation using adjacency list (object-based).
class AdjacencyListGraph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  printGraph() {
    const result = [];
    const vertices = Object.keys(this.vertices);

    for (const vertex of vertices) {
      result.push(`${vertex} -> ${this.vertices[vertex].join(", ")}`);
    }

    return result;
  }
}

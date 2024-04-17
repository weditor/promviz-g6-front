import G6, { Graph } from '@antv/g6';
import { Button } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

const initData = {
    // 点集
    nodes: [
        {
            id: 'node1', // 节点的唯一标识
            x: 100, // 节点横坐标
            y: 200, // 节点纵坐标
            label: '起始点', // 节点文本
        },
        {
            id: 'node2',
            x: 300,
            y: 200,
            label: '目标点',
        },
    ],
    // 边集
    edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
            source: 'node1', // 起始点 id
            target: 'node2', // 目标点 id
            label: '我是连线', // 边的文本
        },
    ],
};

const MyGraph = (props: unknown) => {

    const graphRef = useRef<Graph>()
    const ref = useRef<HTMLDivElement>()
    const [count, setCount] = useState(0)

    const getGraph = () => graphRef.current!
    useEffect(() => {
        if (graphRef.current) {
            console.log("hello, useEffect, graph already inited")
            return
        }
        console.log("hello, useEffect, init graph")
        const graph = new G6.Graph({
            container: ref.current!,
            // width: 400,
            // height: 400
        });
        graph.data(initData)
        graph.render()
        graphRef.current = graph
    }, [])

    return <div><div ref={ref} style={{ width: 500, height: 500, border: "1px solid blue" }}>hello</div>
        <Button onClick={() => setCount(v => v + 1)}>Click</Button>
        <p>clicked: {count}</p>
    </div>
}

export default MyGraph;

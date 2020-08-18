/**
 * author     : jayguo
 * createTime : 2020-02-21 13:29
 */
import React, { useCallback, useEffect, useReducer } from 'react';
import {
    Table,
} from 'antd';

const initialState = {
    data: [{id:'1',title:'test'},{id:'2',title:'test2'},{id:'3',title:'test3'}],
    selectedRowKeys: [],
};
const App = () => {
    const [state, setState] = useReducer((state, payload) => ({ ...state, ...payload }), initialState);
    let { data, selectedRowKeys } = state;


    const columns = [
        {
            title: '名称',
            dataIndex: 'title',
            key: 'title',
        },
    ];

    function onSelectChange(record, selected) {
        console.log('record',record)
        console.log('selected',selected)
        if (selected) {
            selectedRowKeys.push(record.id);
        } else {
            selectedRowKeys = selectedRowKeys.filter(o=> o !== record.id);
        }
        setState({
            selectedRowKeys
        })
    }

    function onSelectAll(selected, selectedRows) {
        console.log('selected',selected)
        console.log('selectedRows',selectedRows)
        setState({
            selectedRowKeys: selected ? selectedRows.map(item => item.id) : [],
        });
    };

    console.log('selectedRowKeys1', selectedRowKeys);
    return (
        <Table
            columns={columns}
            rowKey={record => record.id}
            scroll={{ y: window.document.documentElement.clientHeight - 238 }}
            locale={{
                emptyText: '暂无资源',
            }}
            indentSize={10}
            dataSource={data}
            pagination={false}
            rowSelection={
                {
                    selectedRowKeys,
                    onSelect: onSelectChange,
                    onSelectAll: onSelectAll,
                }
            }
            size="middle"
        />
    );
};
export default React.memo(App);

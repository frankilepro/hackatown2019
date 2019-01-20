import { observable } from "mobx";
import { observer } from 'mobx-react';
import * as React from 'react';
import * as ReactAutocomplete from 'react-autocomplete';

@observer
export default class SearchBar extends React.Component<any> {

    @observable public value: string = "search...";

    public render() {
        return (
            <ReactAutocomplete
                items={[
                    { id: 'foo', label: 'foo' },
                    { id: 'bar', label: 'bar' },
                    { id: 'baz', label: 'baz' },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(this.value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                    >
                        {item.label}
                    </div>
                }
                value={this.value}
                onChange={e => this.value = e.target.value}
                onSelect={val => this.value = val}
            />
        );
    }
}
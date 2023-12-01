"use client"
import { Partner } from '@/app/lib/definitions';
import React, { ChangeEvent, useState } from 'react';
import Select from 'react-select';

const MultiSelect = ({ partners, values }: { partners: Partner[], values: String[] |null }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedValues(selectedOptions);
    };

    const options = partners.map(partner => ({
        value: partner.id,
        label: partner.name
    }))

    const initialValues = values? values.map(value => ({
        value: value,
        label: options.find(op => op.value === value)?.label
    })) : []

    return (
        <>
            <Select id="partner"
                name="partner"
                isMulti
                defaultValue={initialValues? initialValues: {value: "", label: ""}}
                options={options}
                aria-describedby="name-error"
                required
                className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200 p-2"
                />
        </>

    );
};

export default MultiSelect;
import React from "react";
import { RadioInputField, RadioInputOption } from "./RadioInputField";
import { Column } from "../layout/Column";

export default {
  title: "RadioInputField"
};

export const All = () => (
  <Column padding>
    <RadioInputField>
      <RadioInputOption value={1} label="Option 1" description="Test description for option 1" />
      <RadioInputOption value={2} label="Option 2" description="Test description for option 2" />
      <RadioInputOption value={3} label="Option 3" description="Test description for option 3" />
      <RadioInputOption value={4} label="Option 4 (No Description)" />
    </RadioInputField>
    <RadioInputField label="With Label">
      <RadioInputOption value={1} label="Option 1" description="Test description for option 1" />
      <RadioInputOption value={2} label="Option 2" description="Test description for option 2" />
      <RadioInputOption value={3} label="Option 3" description="Test description for option 3" />
      <RadioInputOption value={4} label="Option 4 (No Description)" />
    </RadioInputField>
    <RadioInputField label="Selected">
      <RadioInputOption value={1} label="Option 1" description="Test description for option 1" />
      <RadioInputOption checked value={2} label="Option 2" description="Test description for option 2" />
      <RadioInputOption value={3} label="Option 3" description="Test description for option 3" />
      <RadioInputOption value={4} label="Option 4 (No Description)" />
    </RadioInputField>
  </Column>
);
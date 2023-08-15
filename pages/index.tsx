"use client";
import styled from "styled-components";

const Table = styled.table`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #3a3a3a;
  table-layout: fixed;
  border-collapse: collapse;
`;

const Button = styled.table`
  width: 200px;
  height: 32px;
  color: white;
  background: #000;
  border-radius: 8px;
  table-layout: fixed;
  border-collapse: collapse;
`;

const App = () => {
  return (
    <Table>
      <tbody>
        <tr>
          <td align="center">
            <Button>
              <tbody>
                <tr>
                  <td align="center">Button</td>
                </tr>
              </tbody>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default App;

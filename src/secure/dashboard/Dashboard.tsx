import React from "react";
import Wrapper from "../Wrapper";

const Dashboard  = () => (
    <Wrapper>
        <h2>Section title</h2>
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                </tr>
                </tbody>
            </table>
        </div>
    </Wrapper>
)

export default Dashboard;
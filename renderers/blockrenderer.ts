import SubductFunction from "../functions/SubductFunction.js";
import { graph } from "../gridconverter.js";
import GraphConnection from "../layers/connections.js";
import FunctionNode, { ArgumentOutputPort, FunctionOutputPort } from "../layers/functionnode.js";
import LayerGraph from "../layers/layergraph.js";
import GraphNode, { ArgumentNode, WaypointNode } from "../layers/node.js";

import * as Blockly from 'blockly/core';
import 'blockly/blocks';

class BlockRenderer {
    private workspace!: Blockly.WorkspaceSvg;

    constructor() {
        this.initializeWorkspace();
    }

    private initializeWorkspace() {
        console.log('Initializing Blockly workspace');
        this.workspace = Blockly.inject('block-editor', {
            toolbox: document.getElementById('toolbox') as HTMLElement
        });
        console.log('Blockly workspace initialized');

        // TODO: Define custom blocks here
        Blockly.Blocks['simple_block'] = {
            init: function () {
                this.jsonInit({
                    "type": "simple_block",
                    "message0": "Simple Block",
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": 230,
                    "tooltip": "This is a simple block"
                });
            }
        };

        // Add the custom block to the toolbox
        this.workspace.updateToolbox(`
            <xml id="toolbox" style="display: none">
                <block type="simple_block"></block>
            </xml>
        `);
    }

    public showBlockTab() {
        const blockTab = document.getElementById('block-editor');
        if (blockTab) {
            blockTab.style.display = 'block';
            console.log('Block tab shown');
        }
    }

    public render() {
        // TODO: Implement rendering logic, e.g., updating the Blockly workspace
        // This function is just a placeholder to match the interface for now
        console.log('Rendering Blockly workspace');
    }

    // Custom generator function for code generation
    public generateCode() {
        // Get all blocks in the workspace
        const blocks = this.workspace.getAllBlocks();
        let code = '';

        // Loop through each block and generate code
        blocks.forEach(block => {
            if (block.type === 'simple_block') {
                // Generate code for simple block
                code += 'console.log("Simple block executed");\n';
            }
            // TODO: Add additional conditions for other block types
        });

        return code;
    }
}

export { BlockRenderer }

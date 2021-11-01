import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatProjectTreeNode, ProjectTreeNode } from './models/project-tree.model';
import { PROJECT_TREE_DATA } from './project-structure.constant';


@Component({
  selector: 'app-home-project-structure',
  templateUrl: './project-structure.component.html'
})
export class ProjectStructureComponent implements OnInit {
  private _transformer = (node: ProjectTreeNode, level: number): FlatProjectTreeNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      icon: node.icon,
      comment: node.comment
    };
  }

  treeControl = new FlatTreeControl<FlatProjectTreeNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = PROJECT_TREE_DATA;
  }

  hasChild = (_: number, node: FlatProjectTreeNode) => node.expandable;
}

<!-- menu模块模板 -->
<div class="menu-container">
    <ul class="menu" data-bind="foreach: menuItems">
        <li class="menu-item" data-bind="click: $parent.showModule, css: {'menu-item-active': $parent.activeItem() == moduleId()}">
            <div class="menu-item-icon" data-bind="style: {backgroundColor: color}">
                <i class="fa fa-2x" data-bind="css: icon"></i>
            </div>
            <span class="menu-item-title" data-bind="text: title"></span>
            <div class="menu-item-arrow-icon">
                <i class="fa fa-angle-right fa-2x"></i>
            </div>
        </li>
    </ul>
</div>
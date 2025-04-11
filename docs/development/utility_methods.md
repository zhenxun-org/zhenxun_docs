---
title: 便捷方法
subSidebar: false
---

## 通用表格绘制

```python
from zhenxun.utils.image_utils import BuildImage, ImageTemplate

# 方法参数

async def table_page(
        cls,
        head_text: str,
        tip_text: str | None,
        column_name: list[str],
        data_list: list[list[str | int | tuple[Path | BuildImage, int, int]]],
        row_space: int = 35,
        column_space: int = 30,
        padding: int = 5,
        text_style: Callable[[str, str], RowStyle] | None = None,
) -> BuildImage:
    """表格页

    参数:
        head_text: 标题文本.
        tip_text: 标题注释.
        column_name: 表头列表.
        data_list: 数据列表.
        row_space: 行间距.
        column_space: 列间距.
        padding: 文本内间距.
        text_style: 文本样式.

    返回:
        BuildImage: 表格图片
    """
    ...

# 使用示例

column_name = ["-", "ID", "名称"]

data_list = [
    ["1", "1", "测试1"],
    ["2", "2", "测试2"],
    ["3", "3", "测试3"],
]

result = await ImageTemplate.table_page(
    "测试列表",
    "这是一个简单的测试列表",
    column_name,
    data_list,
)

# 扩展，这个表格允许使用图片作为数据，你可以传入bytes，Path或者BuildImage

column_name = ["-", "头像", "名称"]

a = BuildImage.open("test.jpg")

b = Path() / "test.jpg"

c: bytes = ...

# 格式 (图片, 宽度, 高度)
# 以下参数中，30是图片显示的宽度与高度

data_list = [
    ["1", (a, 30, 30), "测试1"],
    ["2", (b, 30, 30), "测试2"],
    ["3", (c, 30, 30), "测试3"],
]

result = await ImageTemplate.table_page(
    "测试图片列表",
    "这是一个简单的测试图片列表",
    column_name,
    data_list,
)


```



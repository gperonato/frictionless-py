from goodtables import validate


# General


def test_validate():
    report = validate({'name': 'name', 'path': 'data/table.csv'})
    assert report['valid']


def test_validate_invalid_resource():
    report = validate({'name': True, 'path': 'data/table.csv'})
    assert report.flatten(['code', 'details']) == [
        [
            'resource-error',
            'Descriptor validation error: True is not of type \'string\' at "name" in descriptor and at "properties/name/type" in profile',
        ]
    ]


def test_validate_invalid_table():
    report = validate({'name': 'name', 'path': 'data/invalid.csv'})
    assert report.flatten(['rowPosition', 'fieldPosition', 'code']) == [
        [None, 3, 'blank-header'],
        [None, 4, 'duplicate-header'],
        [2, 3, 'missing-cell'],
        [2, 4, 'missing-cell'],
        [3, 3, 'missing-cell'],
        [3, 4, 'missing-cell'],
        [4, None, 'blank-row'],
        [5, 5, 'extra-cell'],
    ]

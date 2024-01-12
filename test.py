"""
@Time : 2024/01/12 12:00
@Author : Tesla
@File : test.py
@Software: PyCharm
@Csdn : https://blog.csdn.net/zhu6201976
"""
import base64
import json

import execjs
import requests
from loguru import logger


class Test(object):
    def __init__(self):
        self.session = requests.session()
        self.session.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' +
                                                   ' (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})
        self.url = base64.b64decode('aHR0cHM6Ly93d3cubHpmY2p5cy5jb20vd3Nwc3Avc3diL2ZpbmRfcXlsYkJ5UGFnZQ==').decode(
            'utf-8')
        self.ctx = execjs.compile(self.read_js_code())

    def read_js_code(self):
        with open('./test.js', 'r', encoding='utf-8') as f:
            return f.read()

    def parse_developer(self):
        page = 1
        data = {
            'page': page,
            'size': 15,
            'qymc': 'undefined'
        }
        resp = self.session.get(self.url, data=data)
        resp_str = resp.content.decode('utf-8', 'ignore')
        resp_dict = json.loads(resp_str)
        key = resp_dict.get('key')

        firstKey = 'huin@liuou'
        secondKey = 'liu0133xin'
        thirdKey = '0772'
        ret = self.ctx.call('strDec', key, firstKey, secondKey, thirdKey)
        logger.info(f'page {page} {ret}')

    def run(self):
        self.parse_developer()


if __name__ == '__main__':
    obj = Test()
    obj.run()
